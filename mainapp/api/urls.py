from django.db import router
from django.urls import path

from rest_framework import routers
from .views import BlogCategoryViewSet, BlogCategoryViewSet

router = routers.SimpleRouter()
router.register('category', BlogCategoryViewSet, basename='category')

urlpatterns = []
urlpatterns += router.urls