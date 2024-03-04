#!/usr/bin/python3
"""Create a Route `/status` on the object app_views."""
from api.v1.views import app_views
from flask import jsonify
from models import storage
from models.state import State
from models.city import City
from models.place import Place
from models.review import Review
from models.amenity import Amenity
from models.user import User


@app_views.route('/status', methods=['GET'], strict_slashes=False)
def jsonstatus():
    """the return ok status"""
    return jsonify(status='OK')


@app_views.route('/api/v1/stats', methods=['GET'], strict_slashes=False)
def getstats():
    """endpoint that retrives the number of each obcts by type"""
    dicreturn = {'amenities': storage.count('Amenity'),
                 'cities': storage.count('City'),
                 'places': storage.count('Place'),
                 'reviews': storage.count('Review'),
                 'states': storage.count('State'),
                 'users': storage.count('User')}
    return jsonify(dicreturn)
