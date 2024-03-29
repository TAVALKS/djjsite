# Generated by Django 3.2.8 on 2021-11-01 05:26

from django.db import migrations, models
import django.db.models.deletion


class Migration(migrations.Migration):

    initial = True

    dependencies = [
    ]

    operations = [
        migrations.CreateModel(
            name='BlogCategory',
            fields=[
                ('id', models.BigAutoField(auto_created=True, primary_key=True, serialize=False, verbose_name='ID')),
                ('name', models.CharField(max_length=255, verbose_name='Имя категории')),
                ('slug', models.SlugField(unique=True)),
            ],
        ),
        migrations.CreateModel(
            name='BlogPost',
            fields=[
                ('id', models.BigAutoField(auto_created=True, primary_key=True, serialize=False, verbose_name='ID')),
                ('title', models.CharField(max_length=255, verbose_name='Назавние поста')),
                ('slug', models.SlugField(unique=True)),
                ('content', models.TextField()),
                ('image', models.ImageField(upload_to='blog_posts/')),
                ('pub_date', models.DateTimeField(auto_now=True)),
                ('in_archive', models.BooleanField(default=False)),
                ('blog_category', models.ForeignKey(on_delete=django.db.models.deletion.CASCADE, to='mainapp.blogcategory', verbose_name='Имя категории')),
            ],
        ),
    ]
