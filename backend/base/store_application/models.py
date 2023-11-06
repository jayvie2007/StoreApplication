from django.db import models
from django.contrib.auth.models import AbstractBaseUser, PermissionsMixin

from .choices import STAFF_LEVEL_CHOICES, TRANSACTION_STATUS_CHOICES


class User(AbstractBaseUser, PermissionsMixin):
    staff_level = models.CharField(
        choices=STAFF_LEVEL_CHOICES, max_length=50, blank=True, null=True
    )
