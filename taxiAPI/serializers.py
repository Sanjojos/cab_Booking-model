from rest_framework import serializers
from .models import customers
from .models import booking
class CustomersSerializer(serializers.ModelSerializer):
    class Meta:
        model=customers
        fields='__all__'

class BookSerializer(serializers.ModelSerializer):
    class Meta:
        model=booking
        fields=['fname', 'lname', 'currentloc', 'destination', 'emails', 'mobile', 'addinfo']
