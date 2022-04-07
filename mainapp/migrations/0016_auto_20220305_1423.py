# Generated by Django 3.2.8 on 2022-03-05 09:23

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('mainapp', '0015_rename_record_blogrecord_record_detail'),
    ]

    operations = [
        migrations.RenameField(
            model_name='blogrecord',
            old_name='titleRecord',
            new_name='post_name',
        ),
        migrations.AlterField(
            model_name='blogpost',
            name='title',
            field=models.CharField(max_length=255, verbose_name='Название поста'),
        ),
    ]
