from django.db import models

# Create your models here.

class BlogCategory(models.Model):

    name = models.CharField(max_length=255, verbose_name='Имя категории')
    slug = models.SlugField(unique = True)


    def __str__(self):
        return self.name

    class Meta:
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
    title = models.CharField(max_length=255, verbose_name='Назавние поста')
    slug = models.SlugField(unique=True)
    content = models.TextField()
    image = models.ImageField(upload_to='images/', blank=True, null=True)
    audio = models.FileField(upload_to='audio/', blank=True, null=True)
    pub_date = models.DateTimeField(auto_now=True)
    in_archive = models.BooleanField(default=False)
    objects = BlogPostManager()

    class Meta:
        verbose_name = 'Публикация'
        verbose_name_plural = 'Публикации'


    def __str__(self):
        return f'{self.title} из категории "{self.blog_category.name}"'