from django.shortcuts import render
from main.models import Product
from django.http import HttpResponse
from django.conf import settings
from django.core.mail import send_mail


def form_input(request):
	return render(request ,"form.html",{"Product_object":Product.objects.get(id = fri)})


def treatment(request,pk):
	'''
	if request.method == "GET":
		if 'q' in request.GET:
			return HttpResponse("вы хотели найти %s" % request.GET['q'])
		else:
			return HttpResponse("вы отправили пустую форму")

	username_2 = "mayki.depressed@gmail.com"
	password_2 = "depressed5644356786"
	server = smtplib.SMTP ("smtp.gmail.com",587)

	server.starttls()
	server.ehlo()
	server.login(username_2,password_2)
	server.sendmail("mayki.depressed@gmail.com", "bakajfeda@gmail.com" , t)
	server.quit()
	'''
	def data_user(name_line, GET_name):
		return name_line + ": " + request.GET[GET_name] + "\n"

	content ="id футболки: " + str(pk) + "\n" + data_user("Адресс фото","adress_photo") + data_user("Имя", "name") + data_user("Фамилия", "surname") + data_user("Отчества", "patronymic") + data_user("Номер телефона", "number_phone") + data_user("Размер футболки", "size_body") + data_user("Коло-во футболок", "number_shirts") + data_user("Город", "city") + data_user("Адресс НОВОЙ ПОЧТЫ", "branch_np")

	send_mail(
	    'Заказ',
	    content,
	    'mayki.depressed@gmail.com',
	    ['mayki.depressed@gmail.com'],
	    fail_silently=False,
	)
	return render(request,"last_page_buy.html")

