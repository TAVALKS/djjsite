# Generated by Django 3.2.8 on 2022-01-11 11:41

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('mainapp', '0008_blogcategory_priority'),
    ]

    operations = [
        migrations.AlterField(
            model_name='blogcategory',
            name='priority',
            field=models.IntegerField(null=True, unique=True),
        ),
    ]
