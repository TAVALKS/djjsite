from django.contrib import admin

# Register your models here.
from .models import BlogPost, BlogCategory, BlogRecord


class BlogPostAdmin(admin.ModelAdmin):
    ordering = ['title']
    list_filter = ['blog_category']


admin.site.register(BlogCategory)
admin.site.register(BlogPost,  BlogPostAdmin)
admin.site.register(BlogRecord)