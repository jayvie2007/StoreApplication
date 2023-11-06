from store_application.models import User, RegisteredUser

from rest_framework import serializers


class UserRegisterSerializer(serializers.Serializer):
    username = serializers.CharField(max_length=20, required=True)
    password = serializers.CharField(max_length=20, required=True)
    first_name = serializers.CharField(max_length=20, required=True)
    last_name = serializers.CharField(max_length=20, required=True)
    mobile = serializers.CharField(max_length=20, required=True)
    email_address = serializers.CharField(max_length=200, required=True)
    address = serializers.CharField(max_length=200, required=True)
    birthday = serializers.CharField(max_length=20, required=True)

    def create(self, validated_data):
        username = validated_data.get("username")
        password = validated_data.get("password")
        first_name = validated_data.get("first_name")
        last_name = validated_data.get("last_name")
        mobile = validated_data.get("mobile")
        email_address = validated_data.get("email_address")
        address = validated_data.get("address")
        birthday = validated_data.get("birthday")

        val_user = User.objects.filter(username=username.lower())

        if val_user:
            raise serializers.ValidationError("Username is already taken!")

        try:
            user = User.objects.create(
                username=username.lower(),
                first_name=first_name,
                last_name=last_name,
                mobile=mobile,
                email_address=email_address,
                address=address,
                birthday=birthday,
                staff_level="USER"
            )
            user.set_password(password)
            user.save()

            staff = RegisteredUser.objects.create(
                user=user,
            )

        except Exception as e:
            print(e)
            raise serializers.ValidationError("userCreationError")
        return staff
