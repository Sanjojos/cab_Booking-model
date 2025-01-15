from django.db import models
class customers(models.Model):
    uname=models.CharField(max_length=30)
    email=models.CharField(max_length=30)
    npass=models.CharField(max_length=30)
    phone=models.IntegerField(default='0')

class booking(models.Model):
    fname=models.CharField(max_length=30)
    lname=models.CharField(max_length=30)
    currentloc=models.CharField(max_length=30)
    destination=models.CharField(max_length=30)
    emails=models.CharField(max_length=30)
    mobile=models.IntegerField(default=0)
    addinfo=models.CharField(max_length=300)