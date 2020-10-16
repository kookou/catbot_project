import os
import sys
sys.path.append(os.path.dirname(os.path.abspath(os.path.dirname(__file__))))

from sqlalchemy import create_engine
from sqlalchemy.orm import sessionmaker
from ext.db import Base
from review.review_dto import Review
'''
어플리케이션이 SQLAlchemy ORM을 사용한다면, 
객체에 바인딩된 쿼리를 위해서 Session 객체를 사용해야 한다. 
이는 session.add(), session.rollback(), session.commit(), session.close()를 통해 
트랜잭션을 단일 작업 단위로 관리하기 좋고, 
이러한 특징을 통해 Python의 Context Manager 패턴을 사용하기에도 좋다.
'''
class ReviewDao():
    def __init__(self):
        Session = sessionmaker(bind=engine)
        self.session = Session()
        self.engine = create_engine('mysql+mysqlconnector://root:root@127.0.0.1/mariadb?charset=utf8', encoding='utf8', echo=True)

    def create_table(self):
        Base.metadata.create_all(self.engine)

    def add_review(self, review):
        Review(review_cmnt='배고파요', taste_rate='4', quantity_rate='4',delivery_rate='4',review_time='d',review_img='img',userid='userid',shop_id='1100',food_id='1120')
        session.add(review)
        session.commit()

    # def fetch_review(self):
    #     query = session.query(Review).filter((Reivew.review_id == '0'))
    #     return query[0]

    def select_review(self):
        con = self.connector
        cur = self.cursor
        rows = []
        try:
            cur.execute('select * from food',)
            rows = cur.fetchall()
            for row in cur:
                print(f'price is : {str(row["price"])}')
            cur.close()
        except:
            print('Exception...')
        finally:
            if con is not None:
                con.close()
        return rows

    def update_user(self):
        ...

    def delete_user(self):
        ...

if __name__ == '__main__':
    dao = ReviewDao()
    dao.create_table()
