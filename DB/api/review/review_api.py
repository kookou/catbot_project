import os
import sys
sys.path.append(os.path.dirname(os.path.abspath(os.path.dirname(__file__))))
# from flask_restful import Resource
from flask import Response, jsonify
from review.review_dao import ReviewDao
from review.review_dto import ReviewDto

class ReviewApi(object):
    def __init__(self):
        self.dao = ReviewDao()
        

    # def get(self):
    #     review = self.dao.select_foods()
    #     return jsonify(foods[0])

    def create(self):
        review = self.dao.create_table()

    def add(self):
        review = self.dao.add_review()
