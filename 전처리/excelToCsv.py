import pandas as pd
import os
import sys
sys.path.append(os.path.dirname(os.path.abspath(os.path.dirname(__file__))))
baseurl = os.path.dirname(os.path.abspath(__file__))
import pandas as pd
from pandas import DataFrame
import glob
import csv
print(baseurl)

# excel_file=r'C:/Users/user/Desktop/chatbot/전처리/data/json/alherbdata.xlsx'
# excel_file=r'C:/Users/user/Desktop/chatbot/전처리/1.xlsx'
# df_excel = pd.read_excel(excel_file)
# df_excel.to_csv("foodExData40.csv",mode='w',index=False)
# f = (r'C:/Users/user/Desktop/chatbot/전처리/data/json/data.txt')
# print(f)
# data = pd.read_table(f, encoding = "utf-8", sep = ',')
# data = pd.read_csv(df_excel, encoding = "utf-8",header=None,names=['question','answer','intent'])
# data = pd.read_csv(df_excel, encoding = "utf-8")
# data.head()
# data.to_csv("foodExData40.csv",mode='w',index=False)
# print(df_excel)


#=====================excel 데이터 추출 ==================
def excel_to_csv():
    excel_file=r'C:/Users/user/Desktop/chatbot/전처리/dialog/caffe.xlsx'

    df_excel = pd.read_excel(excel_file)
    sp = df_excel[['SENTENCE','SPEAKER','MAIN']]
    # splimit = sp.head(14803)
    splimit = sp.loc[0:7180]

    print(splimit)

    # colname = [
    #     'customer','answer'
    # ]

    question = []
    answer = []
    intent=[]

    for i, row in splimit.iterrows() :
        # print(row['SPEAKER'])
        if row['SPEAKER'] == "고객":
            question.append(row['SENTENCE'])
            intent.append(row['MAIN'])
        if row['SPEAKER'] == "점원":
            answer.append(row['SENTENCE'])

        # print(i)
        # if splimit['SPEAKER'].endwith("고객"):
        #     customer.append(sp['SENTENCE'])
    # print(customer)

    questionline = pd.Series(question, name = 'question')
    answerline = pd.Series(answer, name = 'answer')
    intentline = pd.Series(intent, name = 'intent')

    result = pd.concat([questionline,answerline,intentline], axis=1)
    print(result , '\n')

    result.to_csv("caffeRow.csv",mode='w',index=False)

    # print(customerline)
    # print(answerline)



# #========csv 합치기 ================

def merge_csv():

    output_path = 'C:/Users/user/Desktop/chatbot/전처리/FoodACaffeData.csv'
    first_file = True
    input_path = r'C:/Users/user/Desktop/chatbot/전처리'

    for input_file in glob.glob(os.path.join(input_path, '*.csv')):
        print(os.path.basename(input_file)) # 불러온 파일명을 print해서 확인할 수 있게 한다
        with open(input_file, 'r', newline='',encoding='UTF-8-sig') as csv_in_file: # 불러온 csv파일을 연다
            with open(output_path, 'a', newline='',encoding='UTF-8-sig') as csv_out_file: # 합칠 csv파일을 'a'로 해서 연다
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




def csv_to_csv():
    csv_file=r'C:/Users/user/Desktop/chatbot/전처리/caffeRow.csv'
    data = pd.read_csv(csv_file, encoding = "utf-8")

    splimit = data.loc[0:3341]
    splimit.to_csv("caffeData.csv",mode='w',index=False)
    print(splimit)




if __name__ == '__main__':
    merge_csv()