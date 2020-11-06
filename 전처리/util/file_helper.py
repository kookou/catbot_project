from dataclasses import dataclass
import os
import json
import csv
import pandas as pd
from pandas import DataFrame
import glob
# import xlrd
# import googlemaps
from pandas.errors import EmptyDataError

'''
pandas version 1.x 이상 endcoding='UTF-8' 불필요
ImportError: Missing optional dependency 'xlrd'. 
pip install xlrd 주의!! anaconda install xlrd 하면 에러 발생
TEST
'''
reviewcol = [
        'review_id','review_cmnt','taste_rate','quantity_rate','delivery_rate','review_time','userid','shop_id','food_id','order_id','review_img','owner_cmnt']
shopcol = [
    'shop_id','shop_name','shop_addr','shop_img','shop_lat','shop_lng','shop_rev_avg','shop_rev_amt','opentime','cat'
]

fooddata =[
    'customer','answer'
]

@dataclass
class FileReader:
    # def __init__(self, context, fname, train, test, id, label):
    #     self._context = context  # _ 1개는 default 접근, _ 2개는 private 접근

    # 3.7부터 간소화되서 dataclass 데코 후, key: value 형식으로 써도 됨 (롬복 형식)
    context: str = ''
    fname: str = ''
    train: object = None
    test: object = None
    id : str = ''
    lable : str = ''

    def new_file(self) -> str:
        if not os.path.exists(self.context):
            os.mkdir(self.context)
        return os.path.join(self.context, self.fname)

    def csv_to_dframe(self) -> object:
        return pd.read_csv(self.new_file(), encoding='UTF-8', thousands=',')

    def xls_to_dframe(self, header, usecols) -> object:
        print(f'PANDAS VERSION: {pd.__version__}')
        return pd.read_excel(self.new_file(), header=header, usecols=usecols)

    # def create_gmaps(self):
    #     return googlemaps.Client(key='AIzaSyBz9GRH0blpoiLp1co3O5V3hXgwT928jyY')

    def json_load(self):
        return json.load(open(self.new_file(), encoding='UTF-8'))

    def json_save(self, data):
        with open(self.new_file(), 'w', encoding='UTF-8-sig') as file:
            json.dump(data, file, indent=4, ensure_ascii=False)
        print(f'{self.fname} 저장완료')



    
    
    def json_to_csv_review(self, json_data):
        with open(json_data, "r", encoding="UTF-8-sig", newline="") as input_file, \
                open(self.new_file(), "w", encoding="UTF-8-sig", newline="") as output_file:
            input_data = json.load(input_file)
            result = []

            for item in input_data:
                if item['id'] != '' :
                    id = item['id']
                    reviews = item['reviews']
                    for idx in reviews:
                        comment = idx['comment']
                        comment = comment.replace('\r', ' ')
                        comment = comment.replace('\n', ' ')
                        img = idx['review_images']
                        
                        owner = idx['owner_reply'] 

                        imsi = [idx['id'], comment, idx['rating_taste'], idx['rating_quantity'], idx['rating_delivery'],
                        idx['time'],idx['nickname'],id,idx['menu_summary'],idx['id']]

                        imglist =[]

                        for imgidx in img:
                            imglist.append(imgidx['thumb'])
                        imsi.append(imglist)

                        if owner != None:
                            ownercmnt = owner['comment']
                            ownercmnt = ownercmnt.replace('\r', ' ')
                            ownercmnt = ownercmnt.replace('\n', ' ')

                            imsi.append(ownercmnt)
                        
                        # else :
                        #     pass

                        result.append(imsi)
                            # print(imgidx['thumb'])

                else : id = ''

            csv_writer = csv.writer(output_file, delimiter=',')

            try:
                print("오니?1")
                csv_writer.writerow(reviewcol)  # 컬럼 처리
                print("오니?2")
                for line in result:
                    csv_writer.writerow(line)
  
            except:
                print('no data')


    def json_to_csv_shop(self, json_data):
        with open(json_data, "r", encoding="UTF-8-sig", newline="") as input_file, \
                open(self.new_file(), "w", encoding="UTF-8-sig", newline="") as output_file:
            input_data = json.load(input_file)
            result = []

            for item in input_data:
                if item['city'] == '서울':
                    if item['id'] != '' :
                        cat = item['categories']
                        imsi = [item['id'], item['name'], item['address'], f'https://www.yogiyo.co.kr{item["logo_url"]}', item['lat'], item['lng'], item['review_avg'], item['review_count'], item['open_time_description']]
                        
                        catlist =[]

                    for idx in cat:
                        catlist.append(idx)
                    imsi.append(catlist)

                    result.append(imsi)

                else : id = ''

            csv_writer = csv.writer(output_file, delimiter=',')

            try:
                print("시작")
                csv_writer.writerow(shopcol)  # 컬럼 처리
                    
                for line in result:
                    csv_writer.writerow(line)
                print("끝")
    
            except:
                print('no data')



    def merge_csv(self, input_path, output_file, glob_keyword):

        first_file = True
        for input_file in glob.glob(os.path.join(input_path, glob_keyword)):  # csv파일들과 주소를 결합하여 파일을 불러온다
            print(os.path.basename(input_file))  # 불러온 파일명을 print해서 확인할 수 있게 한다
            with open(input_file, 'r', newline='', encoding='UTF-8-sig') as csv_in_file:  # 불러온 csv파일을 연다
                with open(output_file, 'a', newline='', encoding='UTF-8-sig') as csv_out_file:  # 합칠 csv파일을 'a'로 해서 연다
                    filereader = csv.reader(csv_in_file)  # csv.reader()로 읽은 내용을 filereader에 저장한다
                    filewriter = csv.writer(csv_out_file)
                    if first_file:  # 첫번째 파일의 경우, header와 같이 복사되도록 한다
                        for row in filereader:
                            filewriter.writerow(row)
                        first_file = False  # 복사가 끝나면 첫번째 파일이 아니기 때문에 False로 명명한다
                    else:
                        try:
                            header = next(filereader)  # 첫번째 파일이 아닐경우, 머릿글을 header에 저장한다
                        except: 
                            print('빈 파일')
                        for row in filereader:
                            filewriter.writerow(row)  # header를 제외하고 읽은 내용을 쓴다(이때 붙여진 내용은 이전 내용과 띄어쓰기 없이 붙여진다





    def json_to_csv_data(self, json_data):
        with open(json_data, "r", encoding="UTF-8-sig", newline="") as input_file, \
                open(self.new_file(), "w", encoding="UTF-8-sig", newline="") as output_file:
            input_data = json.load(input_file)
            result = []

            for item in input_data:
                if item['id'] != '' :
                    id = item['id']
                    reviews = item['reviews']
                    for idx in reviews:
                        comment = idx['comment']
                        comment = comment.replace('\r', ' ')
                        comment = comment.replace('\n', ' ')
                        img = idx['review_images']
                        
                        owner = idx['owner_reply'] 

                        imsi = [idx['id'], comment, idx['rating_taste'], idx['rating_quantity'], idx['rating_delivery'],
                        idx['time'],idx['nickname'],id,idx['menu_summary'],idx['id']]

                        imglist =[]

                        for imgidx in img:
                            imglist.append(imgidx['thumb'])
                        imsi.append(imglist)

                        if owner != None:
                            ownercmnt = owner['comment']
                            ownercmnt = ownercmnt.replace('\r', ' ')
                            ownercmnt = ownercmnt.replace('\n', ' ')

                            imsi.append(ownercmnt)
                        
                        # else :
                        #     pass

                        result.append(imsi)
                            # print(imgidx['thumb'])

                else : id = ''

            csv_writer = csv.writer(output_file, delimiter=',')

            try:
                print("오니?1")
                csv_writer.writerow(reviewcol)  # 컬럼 처리
                print("오니?2")
                for line in result:
                    csv_writer.writerow(line)
  
            except:
                print('no data')