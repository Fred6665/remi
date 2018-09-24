from django.urls import path
from django.views.generic import ListView
from . import views



urlpatterns=[
	path('',views.play_site)
]