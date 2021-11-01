from rest_framework import viewsets

from .serializers import BlogCategorySerializer
from ..models import BlogCategory


class BlogCategoryViewSet(viewsets.ModelViewSet):

    queryset = BlogCategory.objects.all()
    serializer_class = BlogCategorySerializer