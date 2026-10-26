"use client";
import { updateUser } from '@/app/lib/auth-client';
import { Check } from '@gravity-ui/icons';
import { Button, FieldError, Form, Input, Label, TextField } from '@heroui/react';

import React from 'react';

const onSubmit = async (e) => {
    e.preventDefault();
    const formData = new FormData(e.currentTarget);
    const data = Object.fromEntries(formData.entries());

    const resData = await updateUser({
        name: data.name,
    });

    console.log('Form data:', resData);

};

const ProfilePage = () => {
    return (
        <div>
            <p className= "text-2xl font-bold" >Welcome to your profile page. Here you can update your information.</p>
            <br />   <br />
            <h1 className="text-xl font-bold">Update Your Profile</h1>

            <Form className="flex w-96 flex-col gap-4" onSubmit={onSubmit}>
                    <TextField
                      isRequired
                      name="name"
                      validate={(value) => {
                        if (value.length < 3) {
                          return "Name must be at least 3 characters";
                        }
                        return null;
                      }}
                    >
                      <Label>Name</Label>
                      <Input placeholder="John Doe" />
                      <FieldError />
                    </TextField>

            
                    <div className="flex gap-2">
                      <Button type="submit">
                        <Check />
                        Submit
                      </Button>
                    
                    </div>
                  </Form>
        </div>
    );
};

export default ProfilePage;