from django.shortcuts import render

from rest_framework import status
from rest_framework.views import APIView
from rest_framework.response import Response
from rest_framework.decorators import api_view

from store_application.models import User
from store_application.serializers.serializers_authentication import UserRegisterSerializer


@api_view(["POST"])
def user_registration(request):
    data = request.data
    serializer = UserRegisterSerializer(data=data)
    if serializer.is_valid():
        serializer.save()
        return Response({"message": "Successfully created a new user"}, status=status.HTTP_200_OK)
    return Response(status=status.HTTP_400_BAD_REQUEST)


def user_login(request):
    pass
