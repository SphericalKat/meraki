from rest_framework import serializers

from product.models import Category, Product


class ProductSerializer(serializers.HyperlinkedModelSerializer):
    class Meta:
        model = Product
        fields = (
            "id",
            "name",
            "description",
            "price",
            "image_url",
            "thumbnail_url",
            "url"
        )

class CategorySerializer(serializers.HyperlinkedModelSerializer):
  class Meta:
    model = Category
    fields = ["id", "name", "url"]