from django.db import models
from rest_framework import serializers
from django.contrib.auth.models import User
from .models import Product
# from rest_framework_simplejwt.tokens import RefreshToken




class ProductSerializer(serializers.ModelSerializer):
    class Meta:
        model=Product
        fields='__all__'