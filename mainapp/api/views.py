from rest_framework import viewsets

from .serializers import (
    BlogCategorySerializer,
    BlogPostSerializer,
    BlogPostListRetrieveSerializer,
    BlogCategoryDetailSerializer,
    BlogRecordSerializer,
    BlogRecordListRetrieveSerializer
)
from ..models import BlogCategory, BlogPost, BlogRecord


class BlogCategoryViewSet(viewsets.ModelViewSet):

    queryset = BlogCategory.objects.all()
    serializer_class = BlogCategorySerializer

    action_to_serializer = {
        'retrieve': BlogCategoryDetailSerializer
    }

    def get_serializer_class(self):
        return self.action_to_serializer.get(
            self.action,
            self.serializer_class
        )


class BlogPostViewSet(viewsets.ModelViewSet):

    queryset = BlogPost.objects.all()
    serializer_class = BlogPostSerializer

    action_to_serializer = {
        'list': BlogPostListRetrieveSerializer,
        'retrieve': BlogPostListRetrieveSerializer
    }

    def get_serializer_class(self):
        return self.action_to_serializer.get(
            self.action,
            self.serializer_class
        )


class BlogRecordViewSet(viewsets.ModelViewSet):

    queryset = BlogRecord.objects.all()
    serializer_class = BlogRecordSerializer

    action_to_serializer = {
        'list': BlogRecordListRetrieveSerializer,
        'retrieve': BlogRecordListRetrieveSerializer
    }

    def get_serializer_class(self):
        return self.action_to_serializer.get(
            self.action,
            self.serializer_class
        )
