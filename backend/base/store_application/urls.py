from django.urls import path

from store_application.views.api_authentication import views_authentication

urlpatterns = [
    path('user-registration/', views_authentication.user_registration,
         name="user_registration"),
    path('user-login/', views_authentication.user_login, name="user_login."),
]
