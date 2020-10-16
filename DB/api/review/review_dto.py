import os
import sys
sys.path.append(os.path.dirname(os.path.abspath(os.path.dirname(__file__))))

from ext.db import Base
from sqlalchemy import Column, Integer, Float, String, Date, Text, ForeignKey, create_engine
from sqlalchemy.orm import sessionmaker
from sqlalchemy.dialects.mysql import DECIMAL, VARCHAR, LONGTEXT

class Review(Base):

    __tablename__ = 'review'
    __table_args__={'mysql_collate':'utf8_general_ci'}

    review_id = Column(Integer, primary_key=True, index=True)
    review_cmnt = Column(Text)
    taste_rate = Column(Float)
    quantity_rate = Column(Float)
    delivery_rate = Column(Float)
    review_time = Column(Date)
    review_img = Column(String(300))
    # userid = Column(String(20), ForeignKey(User.userid))
    # shop_id = Column(Integer, ForeignKey(Shop.shop_id))
    # food_id = Column(Integer, ForeignKey(Food.food_id))

    # def __repr__(self):
    #     return f'User(id={self.id},userid={self.userid},\
    #         password={self.password},name={self.name})'

    @property
    def serialize(self):
        return {
            'review_id' : self.review_id,
            'review_cmnt' : self.review_cmnt,
            'taste_rate' : self.taste_rate,
            'quantity_rate' : self.quantity_rate,
            'delivery_rate' : self.delivery_rate,
            'review_time' : self.review_time,
            'review_img' : self.review_img,
            # 'userid' : self.userid,
            # 'shop_id' : self.shop_id,
            # 'food_id' : self.food_id
            
        }


class ReviewDto(object):
    review_id: str
    review_cmnt: str
    taste_rate: str
    quantity_rate: str
    delivery_rate: str
    review_time: str
    review_img:str
    userid:str
    shop_id:str
    food_id:str