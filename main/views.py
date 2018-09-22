from django.shortcuts import render
from django.views.generic import TemplateView
from main.models import Product, Slides

'''
class BlogView(TemplateView):
	template_name = "index.html"

	def get_context_data(self, **kwargs):
		records_content = Product.objects.all()
		records_slides = Slides.objects.all()
		context = [dict(records = records_content),dict(records_1 = records_slides)]
		return context
'''

def play_site(request):
	return render(request, "index.html", {"product_con":Product.objects.all(),"slides_con":Slides.objects.get(id = Slides.objects.all().last().id)})

