from django import forms
from django.contrib import admin
from django.contrib.auth.admin import UserAdmin

from .models import *


class UserCreationForm(forms.ModelForm):
    class Meta:
        model = User
        fields = ("username",)

    def save(self, commit=True):
        # Save the provided password in hashed format
        user = super(UserCreationForm, self).save(commit=False)
        user.set_password(self.cleaned_data["password"])
        if commit:
            user.save()
        return user


class CustomUserAdmin(UserAdmin):
    # The forms to add and change user instances
    add_form = UserCreationForm
    list_display = ("username", "staff_level", "is_active", "last_login")
    ordering = ("username",)
    search_fields = ("username",)

    fieldsets = (
        (
            None,
            {
                "fields": (
                    "username",
                    "password",
                    "first_name",
                    "last_name",
                    "email_address",
                    "address",
                    "birthday",
                    "is_superuser",
                    "is_staff",
                    "is_active",
                    "staff_level",
                    "cash",
                    "last_login",
                )
            },
        ),
    )


admin.site.register(User, CustomUserAdmin)
