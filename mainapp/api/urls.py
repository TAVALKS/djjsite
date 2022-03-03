from django.db import router
from django.urls import path

from rest_framework import routers
from .views import BlogCategoryViewSet, BlogPostViewSet, BlogRecordViewSet

router = routers.SimpleRouter()
router.register('category', BlogCategoryViewSet, basename='category')
router.register('blogpost', BlogPostViewSet, basename='blogpost')
router.register('record', BlogRecordViewSet, basename='record')

urlpatterns = []
urlpatterns += router.urls