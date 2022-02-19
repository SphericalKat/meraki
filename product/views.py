from rest_framework.views import APIView
from rest_framework.response import Response
from rest_framework.decorators import action

from rest_framework import viewsets, permissions

from product.serializers import CategorySerializer, ProductSerializer
from product.models import Category, Product
from meraki.custom_permissions import ReadOnly


class LatestProductList(APIView):
    def get(self, request, format=None):
        products = Product.objects.all()[0:4]
        serializer = ProductSerializer(products, many=True)
        return Response(serializer.data)


class ProductViewSet(viewsets.ModelViewSet):
    """
    API endpoint for product CRUD
    """

    queryset = Product.objects.all()
    serializer_class = ProductSerializer
    permission_classes = [permissions.IsAdminUser | ReadOnly]


class CategoryViewSet(viewsets.ModelViewSet):
    """
    API endpoint for categories CRUD
    """

    queryset = Category.objects.all()
    serializer_class = CategorySerializer
    permission_classes = [permissions.IsAdminUser | ReadOnly]

    @action(detail=True, methods=["get"])
    def products(self, request, pk=None):
        """
        Gets all products belonging to this category
        """
        category = Category.objects.get(id=pk)
        serializer = ProductSerializer(
            category.products, many=True, context={"request": request}
        )
        return Response(serializer.data)
