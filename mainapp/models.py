from django.db import models
from embed_video.fields import EmbedVideoField
from matplotlib.pyplot import title

# Create your models here.

class BlogCategory(models.Model):

    name = models.CharField(max_length=255, verbose_name='Имя категории')
    slug = models.SlugField(unique = True)
    priority = models.IntegerField(unique=True, null=True, verbose_name='Приоритет для показа на фронте')
    in_main_menu = models.BooleanField(default=False, verbose_name='Показать в гл. меню')


    def __str__(self):
        return self.name

    class Meta:
        ordering = ['priority']
        verbose_name = 'Категория'
        verbose_name_plural = 'Категории'


class BlogPostQuerySet(models.QuerySet):

    def find_by_title_in_qs(self, post_title):
        return self.filter(title__icontaians=post_title)


class BlogPostManager(models.Manager):

    def get_queryset(self):
        return BlogPostQuerySet(self.model, using=self._db)


    def all(self):
        return self.get_queryset().filter(in_archive=False)


    def find_by_title_in_qs(self, post_title):
        return self.get_queryset().find_by_title_in_qs(post_title)


class BlogPost(models.Model):

    blog_category = models.ForeignKey(BlogCategory, verbose_name='Имя категории', on_delete=models.CASCADE)
    title = models.CharField(max_length=255, verbose_name='Название поста')
    slug = models.SlugField(unique=True)
    content = models.TextField(blank=True)
    image = models.ImageField(upload_to='images/', blank=True, null=True)
    audio = models.FileField(upload_to='audio/', blank=True, null=True)
    video = EmbedVideoField(null=True, blank=True)
    pub_date = models.DateTimeField(auto_now=True)
    in_archive = models.BooleanField(default=False)
    objects = BlogPostManager()

    class Meta:
        verbose_name = 'Публикация'
        verbose_name_plural = 'Публикации'


    def __str__(self):
        return f'{self.title} из категории "{self.blog_category.name}"'


class BlogRecord(models.Model):
    post_name = models.ForeignKey(BlogPost, verbose_name='Имя поста', on_delete=models.CASCADE)
    title = models.CharField(max_length=255, verbose_name='Название записи', default='Новая запись')
    record_detail = models.CharField(max_length=255, verbose_name='Записи')
    audio = models.FileField(upload_to='audio/', blank=True, null=True)
    pub_date = models.DateTimeField(auto_now=True)
    in_archive = models.BooleanField(default=False)

    class Meta:
        verbose_name = ' Запись в публикации'
        verbose_name_plural = 'Записи в публикации'

    def __str__(self):
        return f'{self.post_name} из публикации "{self.post_name.title}"'


class ServiceInfo(models.Model):

    head_title = models.CharField(max_length=75, verbose_name='Заголовок')
    about_us =  models.CharField(max_length=75, verbose_name='О нас')
    address = models.CharField(max_length=75, verbose_name='Наш адрес')
    phone_number_for_conntact = models.CharField(max_length=75, verbose_name='Номера для связи')

    class Meta:
        verbose_name = 'Сервисная информация'
        verbose_name_plural = 'Сервисные информации'

    def __str__(self):
        return f'{self.head_title}'