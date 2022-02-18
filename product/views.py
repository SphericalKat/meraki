import imp
from django.shortcuts import render
from rest_framework.views import APIView
from rest_framework.response import Response

from product.serializers import ProductSerializer
from product.models import Product


class LatestProductList(APIView):
    def get(self, request, format=None):
        products = Product.objects.all()[0:4]
        serializer = ProductSerializer(products, many=True)
        return Response(serializer.data)
