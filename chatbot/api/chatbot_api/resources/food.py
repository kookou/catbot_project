# from sqlalchemy import Column, Integer, Float, String, ForeignKey, create_engine
# from sqlalchemy.dialects.mysql import DECIMAL, VARCHAR, LONGTEXT
from typing import List
from flask import request
from flask_restful import Resource, reqparse
from flask import jsonify
import json
import os
import numpy as np
import pandas as pd

from sklearn.ensemble import RandomForestClassifier  # rforest
from sklearn.tree import DecisionTreeClassifier  # dtree
from sklearn.ensemble import RandomForestClassifier  # rforest
from sklearn.naive_bayes import GaussianNB  # nb
from sklearn.neighbors import KNeighborsClassifier  # knn
from sklearn.svm import SVC  # svm
from sklearn.model_selection import train_test_split
from sklearn.model_selection import KFold  # k value is understood as count
from sklearn.model_selection import cross_val_score
from pathlib import Path

from chatbot_api.ext.db import db, openSession
from chatbot_api.util.file_handler import FileReader

from chatbot_api.resources.order_review import OrderReviewDto

class FoodDto(db.Model):
    __tablename__ = "food"
    __table_args__ = {'mysql_collate': 'utf8_general_ci'}  # 한글 인코딩

    food_id: int = db.Column(db.Integer, primary_key=True, index=True)
    food_name: str = db.Column(db.String(200))
    price: int = db.Column(db.Integer)
    food_img: str = db.Column(db.String(1000))  # 최대 길이가 634정도였음
    food_rev_avg: float = db.Column(db.Float)
    food_rev_cnt: float = db.Column(db.Integer)

    shop_id: int = db.Column(db.Integer, db.ForeignKey('shop.shop_id'))

    order_reviews = db.relationship('OrderReviewDto', backref='food', lazy=True)

    def __init__(self, food_id, food_name, price, food_img, food_rev_avg,
                 food_rev_cnt, shop_id):
        self.food_id = food_id
        self.food_name = food_name
        self.price = price
        self.food_img = food_img
        self.food_rev_avg = food_rev_avg
        self.food_rev_cnt = food_rev_cnt
        self.shop_id = shop_id

    def __repr__(self):
        return f'Food(food_id={self.food_id}, ' \
               f'food_name={self.food_name}, ' \
               f'price={self.price}, ' \
               f'food_img={self.food_img}, ' \
               f'food_rev_avg={self.food_rev_avg}, ' \
               f'food_rev_cnt={self.food_rev_cnt}, ' \
               f'shop_id="{self.shop_id}"'

    @property
    def json(self):
        return {
            'food_id': self.food_id,
            'food_name': self.food_name,
            'price': self.price,
            'food_img': self.food_img,
            'food_rev_avg': self.food_rev_avg,
            'food_rev_cnt': self.food_rev_cnt,
            'shop_id': self.shop_id
        }

class FoodVo:
    food_id: int = 0
    food_name: str = ''
    price: int = 0
    food_img: str = ''
    food_rev_avg: float = 0.0
    food_rev_cnt: float = 0.0

    shop_id: int = 0




# ------------ 실행 영역 --------------
if __name__ == '__main__':

    # import pdb
    # # 데이터 일괄 입력
    df = pd.read_csv('./data/csv/important/food.csv', sep=',', encoding='utf-8-sig')
    df = df.replace(np.nan, '', regex=True)

    # shop_seoul = df.loc[df['shop_addr'].str.contains('서울', na=False)]
    # print(shop_seoul['shop_addr'])

    # shop_seoul.to_csv('./data/csv/important/shop(seoul).csv', sep=',', encoding='utf-8-sig', index=False)

    # pdb.set_trace()

    # 외래키 있으면 로딩 에러난다..
    # Session = openSession()
    # session = Session()
    # session.bulk_insert_mappings(FoodDto, df.to_dict(orient="records"))
    # session.commit()
    # session.close()