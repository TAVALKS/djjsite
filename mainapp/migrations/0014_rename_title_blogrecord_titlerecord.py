# Generated by Django 3.2.8 on 2022-01-26 11:21

from django.db import migrations


class Migration(migrations.Migration):

    dependencies = [
        ('mainapp', '0013_auto_20220126_1551'),
    ]

    operations = [
        migrations.RenameField(
            model_name='blogrecord',
            old_name='title',
            new_name='titleRecord',
        ),
    ]
