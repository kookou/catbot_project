import os
import sys
sys.path.append(os.path.dirname(os.path.abspath(os.path.dirname(__file__))))

from item.item_api import ItemApi


def initialize_routes(api):
    api.add_resource(ItemApi, '/api/items')
