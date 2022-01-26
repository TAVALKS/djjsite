from rest_framework import serializers

from ..models import BlogPost, BlogCategory, BlogRecord


class BlogCategorySerializer(serializers.ModelSerializer):

    class Meta:
        model = BlogCategory
        fields = '__all__'


class BlogCategoryDetailSerializer(serializers.ModelSerializer):

    posts = serializers.SerializerMethodField()

    class Meta:
        model = BlogCategory
        fields = '__all__'

    @staticmethod
    def get_posts(obj):
        return BlogPostSerializer(BlogPost.objects.filter(blog_category=obj), many = True).data


class BlogPostDetailSerializer(serializers.ModelSerializer):

    records = serializers.SerializerMethodField()

    class Meta:
        model = BlogPost
        fields = '__all__'

    @staticmethod
    def get_records(obj):
        return BlogRecordSerializer(BlogRecord.objects.filter(titleRecord=obj), many = True).data


class BlogPostSerializer(serializers.ModelSerializer):

    class Meta:
        model = BlogPost
        fields = '__all__'


class BlogPostListRetrieveSerializer(serializers.ModelSerializer):

    blog_category = BlogCategorySerializer()

    class Meta:
        model = BlogPost
        fields = '__all__'


class BlogRecordSerializer(serializers.ModelSerializer):

    class Meta:
        model = BlogRecord
        fields = '__all__'


class BlogRecordListRetrieveSerializer(serializers.ModelSerializer):

    titleRecord = BlogRecordSerializer()

    class Meta:
        model = BlogRecord
        fields = '__all__'