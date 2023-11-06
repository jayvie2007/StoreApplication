from django.db import models
from django.utils import timezone
from django.contrib.auth.models import AbstractBaseUser, PermissionsMixin

from .managers import UserManager
from .choices import STAFF_LEVEL_CHOICES, TRANSACTION_STATUS_CHOICES


class User(AbstractBaseUser, PermissionsMixin):
    username = models.CharField(unique=True, max_length=255, blank=False)
    first_name = models.CharField(max_length=150, blank=True)
    last_name = models.CharField(max_length=150, blank=True)
    address = models.CharField(max_length=150, blank=True)
    email_address = models.EmailField(max_length=150, blank=True)
    birthday = models.DateField(null=True, blank=True)
    staff_level = models.CharField(
        choices=STAFF_LEVEL_CHOICES, max_length=50, blank=True, null=True)
    cash = models.DecimalField(
        max_digits=20, decimal_places=2, default=0.0, null=True, blank=True)
    mobile = models.CharField(max_length=100, blank=True, null=True)
    is_staff = models.BooleanField(default=False)
    is_active = models.BooleanField(default=False)
    is_superuser = models.BooleanField(default=False)
    last_login = models.DateTimeField(null=True, blank=True)
    total_login = models.IntegerField(null=True, blank=True, default=0)
    date_joined = models.DateTimeField(default=timezone.now)
    date_updated = models.DateTimeField("Updated Date", auto_now=True)

    USERNAME_FIELD = "username"
    objects = UserManager()


class RegisteredUser(models.Model):
    user = models.OneToOneField(
        User, on_delete=models.SET_NULL, null=True)
    created_date = models.DateTimeField("Created Date", default=timezone.now)
    updated_date = models.DateTimeField("Updated Date", auto_now=True)
