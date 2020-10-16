import os
import sys
sys.path.append(os.path.dirname(os.path.abspath(os.path.dirname(__file__))))

from sqlalchemy.ext.declarative import declarative_base
Base = declarative_base()

config = {
    'user': 'root',
    'password': 1004,
    'host': 'localhost',
    'port': '3306',
    'database': 'mariadb'
}
