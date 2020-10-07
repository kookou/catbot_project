
import json
import requests
import time

class YogiyoCrawlerReview:
    

    def __init__(self):
        pass

    def get_json(self, url):

        payload = {}
        headers = {
          'x-apikey': 'iphoneap',
          'x-apisecret': 'fe5183cc3dea12bd0ce299cf110a75a2'
        }

        try:
            response = requests.request("GET", url, headers=headers, data = payload)
        except:
            print("ZZzzzz...")
            time.sleep(5)  # 너무 많은 request로 에러가 발생할 수 있으므로 잠시 쉰다
            return ['']  # 에러 발생 후 리스트를 리턴하여 해당번호는 패스하게 만듬
        try:
            json_data = response.json()
        except:
            print('유효하지 않은 json형식')
            return []
        # print(json_data)
        return json_data

    def get_json_store(self, start, end):
        json_list = []
        for index in range(start, end):
            index = str(index).zfill(6)
            url = f"https://www.yogiyo.co.kr/api/v1/reviews/{index}"
            ajson = self.get_json(url)
            if isinstance(ajson, dict):
                json_list.append(ajson)
            print(f'{index}번 크롤링 중')
        
        file_path = f"/Users/kuku/Desktop/Yogiyo/review/data/yogiyo_store({start}~{end}).json"
        with open(file_path, 'w', encoding='UTF-8-sig') as file:
            json.dump(json_list, file, indent=4, ensure_ascii=False)
        print(f'yogiyo_store({start}~{end}).json 저장완료')

    def get_json_menu(self, start, end, list_data):
        json_list = []
        error_list = []
        for index in range(start, end):
            id = list_data[index]
            url = f"https://www.yogiyo.co.kr/api/v1/restaurants/{id}/menu"
            ajson = self.get_json(url)
            
            print(f'{index}번 크롤링 중')
            
            try:
                if isinstance(ajson[0], dict):
                    # 필요 데이터만 전처리
                    # print(ajson)
                    # print(len(ajson))
                    pre_json = {"id": id}  # 전처리 데이터를 담을 json. 우선 id를 담는다.
                    item_list = []
                    for item in ajson[0]["items"]:
                        item_dict = dict()
                        item_dict["name"] = item["name"]
                        item_dict["price"] = item["price"]
                        item_dict["id"] = item["id"]
                        item_dict["review_count"] = item["review_count"]
                        item_list.append(item_dict)
                    pre_json["menus"] = item_list
                    json_list.append(pre_json)
            except:
                print(f'오류 데이터: id:{id}', ajson)
                error_list.append(id)


        file_path = f"/Users/kuku/Desktop/Yogiyo/data/json/menu(seoul)/yogiyo_menu({start}~{end}).json"
        with open(file_path, 'w', encoding='UTF-8-sig') as file:
            json.dump(json_list, file, indent=4, ensure_ascii=False)
        print(f'yogiyo_menu({start}~{end}).json 저장완료')

        # 에러 로그 저장
        file_path = f"/Users/kuku/Desktop/Yogiyo/data/json/menu(seoul)/yogiyo_menu_error({start}~{end}).json"
        with open(file_path, 'w', encoding='UTF-8-sig') as file:
            json.dump(error_list, file, indent=4, ensure_ascii=False)
        print(f'yogiyo_menu_error({start}~{end}).json 저장완료')

    def load_json(self, file_path):

        # file_path = "./sample.json"
        with open(file_path, "r", encoding="UTF-8-SIG") as json_file:
            json_data = json.load(json_file)
            # print(json_data)

        return json_data

    def get_store_id_by_city(self, json_data, city):
        id_list = []
        for item in json_data:
            if city == item['city']:
                 id_list.append(item['id'])
        return id_list









# import numpy as np
# a = np.array(list)
# print(np.median(a))
# print(max(list))
# print('리뷰내용:', restaurants[0]["comment"])
# print('메뉴이름:', restaurants[0]["menu_summary"])
# print('좋아요갯수:', restaurants[0]["like_count"])
# print('양평점:', restaurants[0]["rating_quantity"])
# print('맛평점:', restaurants[0]["rating_taste"])
# print('배달평점:', restaurants[0]["rating_delivery"])
# print('리뷰등록시간:', restaurants[0]["time"])
# print('리뷰등록이미지:', restaurants[0]["review_images"])    #full , thumb
# print('사장님댓글:', restaurants[0]["owner_reply"])     #comment(내용) , created_at(등록시간) , id


# list = []
# # for i, item in enumerate(restaurants):
# for i in range(5):
#     list.append(restaurants[i]["id"])
#
# print(list)
#
# json_list = []


    # 메뉴정보 json 크롤링
    def menu_crawling(self):
        pass

# for item in list:
#     url = f"https://www.yogiyo.co.kr/api/v1/restaurants/{item}/menu"
#
#     payload = {}
#     headers = {
#       'x-apikey': 'iphoneap',
#       'x-apisecret': 'fe5183cc3dea12bd0ce299cf110a75a2'
#     }
#
#     response = requests.request("GET", url, headers=headers, data = payload)
#
#     json_data = response.json()
#     json_list.append(json_data)
# # print(json_data)
# # print(json_list)
# print(len(json_list))
#
# file_path = "./sample_menu.json"
# with open(file_path, 'w', encoding='UTF-8-sig') as file:
#     json.dump(json_list, file, indent=4, ensure_ascii=False)


if __name__ == '__main__':
    yogiyo = YogiyoCrawler()

    # 매장 크롤링
    # start = 361000
    # end = 362000
    # for i in range(9):
    #     yogiyo.get_json_store(start, end)
    #     start += 1000
    #     end += 1000


    # -------------------------
    # 메뉴 크롤링
    file_path = f'/Users/kuku/Desktop/Yogiyo/data/yogiyo_store_id_list(seoul).json'
    json_data = yogiyo.load_json(file_path)
    # start = 0
    # end = 1000
    # for i in range(10):
    #     yogiyo.get_json_menu(start, end, json_data)
    #     start += 1000
    #     end += 1000
    yogiyo.get_json_menu(40000, 50000, json_data)



    # ---------------------------
    # 서울의 매장 id만 취합

    # start = 0
    # end = 1000
    # total_list = []
    # for i in range(498):
    #     file_path = f'./data/json/yogiyo_store({start}~{end}).json'
    #     json_data = yogiyo.load_json(file_path)
    #     id_list = yogiyo.get_store_id_by_city(json_data, '서울')
    #     # print(id_list)
    #     total_list += id_list
    #     start += 1000
    #     end += 1000
    #
    # print(len(total_list))
    # file_path = "./yogiyo_store_id_list(seoul).json"
    # with open(file_path, 'w', encoding='UTF-8-sig') as file:
    #     json.dump(total_list, file, indent=4, ensure_ascii=False)















