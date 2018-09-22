from django.urls import path
from django.views.generic import DetailView
from . import views
from main.models import Product


urlpatterns = [
	path('<int:pk>/', DetailView.as_view(model = Product, template_name = "form.html") ),
	path('treatment/<int:pk>/', views.treatment ,name="treatment")
]
