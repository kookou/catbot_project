from eunjeon import Mecab
import re
import konlpy
import numpy as np
import pandas as pd
import pickle
import tensorflow as tf
tf.random.set_seed(777) #하이퍼파라미터 튜닝을 위해 실행시 마다 변수가 같은 초기값 가지게 하기


komoran = konlpy.tag.Komoran()
okt = konlpy.tag.Okt()
kkma = konlpy.tag.Kkma()
mecab = Mecab()

train_data_reserve = ['피자집 추천해줘']
train_data_order = ['베스킨라빈스 주문해줘']
train_data_recommend = ['우리 동네 초밥집 보여줘']
# train_data_info = ['모래 날짜의 판교 여행 정보 알려줘']

get_data_list = train_data_reserve[0]


# train_data_order = ['판교에 오늘 피자 주문해줘']
# train_data_reserve = ['오늘 날짜에 호텔 예약 해줄레']
# train_data_info = ['모래 날짜의 판교 여행 정보 알려줘']

# get_data_list = train_data_info[0]

# dict_entity = {
#     'date' : ['오늘','내일','모래'],
#     'loc' : ['판교','야탑'],
#     'menu' : ['피자','햄버거'],
#     'hotel' : ['호텔','여관','민박'],
#     'travel' : ['여행','관광','카페']
# }


dict_entity = {
    # 'active' : ['추천','가격','얼마','메뉴','찾아'],
    # 'order' : ['주문','배달','시켜'],
    'menu' : ['피자','햄버거','짜장면','짬뽕','치킨','돈까스','초밥','일식','양식','스파게티','밥','보쌈','한식','프렌차이즈','김밥','떡볶이','족발','분식','디저트','야식','한식','중식','커피','삼계탕','찌개','냉면']
    # 'loc' : ['근처','동네','강남','집','회사','신사','논현','압구정','청담','삼성','대치','역삼','도곡','개포','일원','수서','세곡'],
    # 'date' : ['오늘','내일','모래','점심','저녁','아침']
}

length = 1
for key in list(dict_entity.keys()):
    length = length * len(dict_entity[key])
print("Augmentation length is {0}".format(length))

morpphed_text = kkma.pos(get_data_list)
print('1',morpphed_text) # [('근처', 'NNG'), ('피자', 'NNG'), ('추천', 'NNG'), ('해', 'XSV+EC'), ('줘', 'VX+EC')]


tagged_text = ''
for pos_tags in morpphed_text:
    if (pos_tags[1] in ['NNG','MAG', 'NNP','SL'] and len(pos_tags[0]) > 1): #Check only Noun
        feature_value = pos_tags[0]
        tagged_text = tagged_text + pos_tags[0] + ' '

print('2',tagged_text) #(근처 피자 추천)


pattern = ''

for word in tagged_text.split(' '):
    # print(word) #[근처, 피자, 추천]
    entity = list(filter(lambda key:word in dict_entity[key], list(dict_entity.keys())))
    if(len(entity) > 0): 
        print('너니')
        pattern = pattern + 'tag' + entity[0] + ' '
        # pattern = pattern
    else:
        pattern = pattern + word + ' '
print('3',pattern)





def augmentation_pattern(pattern, dict_entity, tagged_text):
    #입력된 패턴을 List로 바꿈
    aug_pattern = pattern.split(' ')
    #Augment된 Text List
    augmented_text_list = []
    #copy를 위한 임시 List
    temp_aug = []
    text = ''
    # tagged_text = tagged_text.split(' ')
    for i in range(0,len(aug_pattern)):
        #Entity에 해당하는 값일 경우 Entity List를 가져옴
        if(aug_pattern[i].find("tag") > -1):
            dict_list = dict_entity[aug_pattern[i].replace("tag","")]
            for j in range(0,len(dict_list)):
                for k in range(0,len(tagged_text)):
                # print('4',dict_list)
                    if (j == k) :
                        print('하하')
                        text = tagged_text[j]
                        break
                    else :
                        print('떙')
    print('6',text)
            #각 Entity별로 값을 append하면서 Pattern구성
    #         for j in range(0,len(dict_list)):
    #             #최초 Entity값은 그냥 추가만함
    #             if(i == 0):
    #                 augmented_text_list.append(dict_list[j] + " ")
    #             elif(j == 1):
    #                 augmented_text_list = list(filter(lambda word:len(word.split(' ')) == i + 1 ,augmented_text_list))
    #                 copy_data_order = augmented_text_list * (len(dict_list)-2)
    #                 augmented_text_list = list(map(lambda x:x + dict_list[j] + " ",augmented_text_list))
    #                 augmented_text_list = augmented_text_list + temp_aug + copy_data_order
    #             else:
    #                 #List의 수를 체크하여 값을 추가
    #                 temp_aug = list(filter(lambda word:len(word.split(' ')) == i+1 ,augmented_text_list))
    #                 temp_aug = list(map(lambda x:x + dict_list[j] + " " ,temp_aug))
    #                 #추가된 List를 위해 기존 값 삭제
    #                 if(j != 0):
    #                     augmented_text_list = augmented_text_list[0:len(augmented_text_list) - len(temp_aug)]
    #                 augmented_text_list = augmented_text_list + temp_aug

    #     #Entity추가 대상이 아닐 경우 Pattern만 추가
    #     else:
    #         augmented_text_list = list(map(lambda x:x + aug_pattern[i] + " ",augmented_text_list))
    #     #N*N으로 증가시키기 위한 List
    #     temp_aug = augmented_text_list
    # print(len(augmented_text_list))
    return dict_list


def augmentation_bio_pattern(pattern, dict_entity):
    #입력된 패턴을 List로 바꿈
    aug_pattern = pattern.split(' ')
    #Augment된 Text List
    augmented_text_list = []
    #copy를 위한 임시 List
    temp_aug = []
    for i in range(0,len(aug_pattern)):
        #Entity에 해당하는 값일 경우 Entity List를 가져옴
        if(aug_pattern[i].find("tag") > -1):
            dict_list = dict_entity[aug_pattern[i].replace("tag","")]
            bio_tag = aug_pattern[i].replace("tag","B_")
            #각 Entity별로 값을 append하면서 Pattern구성
            for j in range(0,len(dict_list)):
                #최초 Entity값은 그냥 추가만함
                if(i == 0):
                    augmented_text_list.append(bio_tag + " ")
                elif(j == 1):
                    augmented_text_list = list(filter(lambda word:len(word.split(' ')) == i + 1 ,augmented_text_list))
                    copy_data_order = augmented_text_list * (len(dict_list)-2)
                    augmented_text_list = list(map(lambda x:x + bio_tag + " ",augmented_text_list))
                    augmented_text_list = augmented_text_list + temp_aug + copy_data_order
                else:
                    #List의 수를 체크하여 값을 추가
                    temp_aug = list(filter(lambda word:len(word.split(' ')) == i+1 ,augmented_text_list))
                    temp_aug = list(map(lambda x:x + bio_tag + " " ,temp_aug))
                    #추가된 List를 위해 기존 값 삭제
                    if(j != 0):
                        augmented_text_list = augmented_text_list[0:len(augmented_text_list) - len(temp_aug)]
                    augmented_text_list = augmented_text_list + temp_aug

        #Entity추가 대상이 아닐 경우 Pattern만 추가
        else:
            augmented_text_list = list(map(lambda x:x + aug_pattern[i] + " ",augmented_text_list))
        #N*N으로 증가시키기 위한 List
        temp_aug = augmented_text_list
    return augmented_text_list

# def chat(text):
#     if text == '안녕하세요':
#         response = '안녕하세요'
#     elif text == '내일 날씨는 어떨까요':
#         response = '내일 날씨는 맑겠습니다'
#     else:
#         response = '무슨 말인지 이해 못했습니다'
#     return response

# print('챗봇')
# print('챗봇과 대화를 합니다.')

# while True:
#     text = input('나: ')
#     if text == 'quit':
#         break

#     print('챗봇:', chat(text))


if __name__ == '__main__':
    augmented_text_list  = augmentation_pattern(pattern,dict_entity,tagged_text)
    print(augmented_text_list)
    # bio_list = augmentation_bio_pattern(pattern, dict_entity)
    # ner_train_text = [augmented_text_list, bio_list]
    # print(bio_list)

