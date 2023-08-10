from django.urls import path
from app import views
urlpatterns = [
    path('',views.getRoutes,name='getRoutes'),
    path('products/',views.getProducts,name='getProducts'),
    path('products/<int:pk>',views.getProduct,name='getProduct'),
]
