from django.shortcuts import render

from rest_framework import status
from rest_framework.views import APIView
from rest_framework.response import Response
from rest_framework.decorators import api_view

from store_application.models import User
from store_application.serializers.serializers_authentication import UserRegisterSerializer, LoginSerializers


@api_view(["POST"])
def user_registration(request):
    if request.method =="POST":
        try:
            data = request.data
            serializer = UserRegisterSerializer(data=data)
            if serializer.is_valid():
                serializer.save()
                return Response({"message": "Successfully created a new user"}, status=status.HTTP_200_OK)
        except Exception as e:
            return Response(e, status=status.HTTP_400_BAD_REQUEST)
    return Response(status=status.HTTP_400_BAD_REQUEST)


@api_view(["POST"])
def user_login(request):
    if request.method == "POST":
        data = request.data
        serializer = LoginSerializers(data=data, context={"request": request})
        if serializer.is_valid():
            user = serializer.validated_data.get("user")
            return Response({"message": "Login Successfully", "user_id": user.id}, status=status.HTTP_202_ACCEPTED)
        else:
            return Response({"message": "Check Fields"}, status=status.HTTP_400_BAD_REQUEST)
