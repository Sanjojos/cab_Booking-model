# Generated by Django 5.0.2 on 2024-07-08 05:48

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('taxiAPI', '0001_initial'),
    ]

    operations = [
        migrations.RemoveField(
            model_name='customers',
            name='cpass',
        ),
        migrations.AddField(
            model_name='customers',
            name='phone',
            field=models.IntegerField(default='0'),
        ),
    ]
