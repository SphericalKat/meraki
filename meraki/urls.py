from django.contrib import admin
from django.urls import include, path
from rest_framework import routers

from meraki.core.views import UserViewSet, GroupViewSet
from product.views import CategoryViewSet, ProductViewSet

router = routers.DefaultRouter()
router.register(r"users", UserViewSet)
router.register(r"groups", GroupViewSet)
router.register(r"product", ProductViewSet)
router.register(r"category", CategoryViewSet)


urlpatterns = [
    path("", include(router.urls)),
    path("api-auth/", include("rest_framework.urls", namespace="rest_framework")),
    path("admin/", admin.site.urls),
    path("product/", include("product.urls")),
]
