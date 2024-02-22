import React, { useState, useEffect } from 'react'
import AdminLayout from "../layout/AdminLayout";
import FormEditPost from '../components/blocks/FormEditPost';

export default function EditPost() {


    return (
        <AdminLayout>
            <FormEditPost />
        </AdminLayout>
    )
}