from rest_framework import serializers
from .models import Product
# from rest_framework_simplejwt.tokens import RefreshToken




class ProductSerializer(serializers.ModelSerializer):
    class Meta:
        model=Product
        fields='__all__'