# Generated by Django 3.2.8 on 2021-12-14 07:01

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('mainapp', '0005_alter_blogpost_image'),
    ]

    operations = [
        migrations.AddField(
            model_name='blogpost',
            name='audio',
            field=models.FileField(blank=True, null=True, upload_to='audio/'),
        ),
    ]
