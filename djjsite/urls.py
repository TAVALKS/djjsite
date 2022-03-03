"""djjsite URL Configuration

The `urlpatterns` list routes URLs to views. For more information please see:
    https://docs.djangoproject.com/en/3.2/topics/http/urls/
Examples:
Function views
    1. Add an import:  from my_app import views
    2. Add a URL to urlpatterns:  path('', views.home, name='home')
Class-based views
    1. Add an import:  from other_app.views import Home
    2. Add a URL to urlpatterns:  path('', Home.as_view(), name='home')
Including another URLconf
    1. Import the include() function: from django.urls import include, path
    2. Add a URL to urlpatterns:  path('blog/', include('blog.urls'))
"""
from django.contrib import admin
from django.urls import path, include
from django.conf import settings
from django.conf.urls.static import static

from mainapp.views import index, category_detail, post_detail, record_detail

urlpatterns = [
    path('admin/', admin.site.urls),
    path('', index),
    path('category/<int:id>/', category_detail),
    path('posts/<int:id>/', post_detail),
    path('records/<int:id>/', record_detail),
    path('api/', include('mainapp.api.urls'))
] + static(settings.MEDIA_URL, document_root=settings.MEDIA_ROOT)
