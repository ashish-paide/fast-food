import email
from django import forms
from django.contrib.auth.forms import UserChangeForm
from django.contrib.auth.models import User

class NewUserForm(UserChangeForm):
    email = forms.EmailField(max_length=100,required=True,help_text="Inform a valid email address")
    class Meta:
        model = User
        fields = ['username','email']