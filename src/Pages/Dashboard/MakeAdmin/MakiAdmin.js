import React, { useState } from 'react';
import TextField from '@mui/material/TextField';
import { Button } from '@mui/material';
import Swal from 'sweetalert2'
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import { CardActionArea } from '@mui/material';



const MakeAdmin = () => {
    const [email, setEmail] = useState('');
    const [adminSuccess, setAdminSuccess] = useState(false);
    console.log(adminSuccess)

    const handleOnBlur = (e) => {
        setEmail(e.target.value);
    }


    const handleMakeAdmin = (e) => {
        e.preventDefault();
        const user = { email };

        const swalWithBootstrapButtons = Swal.mixin({
            customClass: {
                confirmButton: 'btn btn-info ms-2',
                cancelButton: 'btn btn-danger me-2'
            },
            buttonsStyling: false
        })
        swalWithBootstrapButtons.fire({
            title: 'Are you sure?',
            text: "You won't be Create an a admin!",
            icon: 'question',
            showCancelButton: true,
            confirmButtonText: 'Yes, Create !',
            cancelButtonText: 'No, cancel!',
            reverseButtons: true
        }).then((result) => {
            if (result.isConfirmed) {
                fetch('https://radiant-chamber-46753.herokuapp.com/users/admin', {
                    method: 'PUT',
                    headers: {
                        'content-type': 'application/json'
                    },
                    body: JSON.stringify(user)
                })
                    .then(res => res.json())
                    .then(data => {
                        if (data.modifiedCount) {
                            console.log(data);
                            setEmail('');
                            setAdminSuccess(true);
                            swalWithBootstrapButtons.fire(
                                'Created',
                                'New admin created successfully.',
                                'success'
                            )
                        }
                        else if (!data.modifiedCount) {
                            Swal.fire({
                                icon: 'error',
                                title: 'Admin create field',
                                text: ' Some problem the create make admin',
                            })
                        }
                    })
            }
            else if (
                /* Read more about handling dismissals below */
                result.dismiss === Swal.DismissReason.cancel
            ) {
                swalWithBootstrapButtons.fire(
                    'Cancelled',
                    'Admin created request canceled :)',
                    'error'
                )
            }
        })
    }
    return (
        <div >
            <div className="container">
                <h2 className="fw-bold text-secondary py-2">CREATE A ADMIN</h2>

                <Card className='shadow w-75 mx-auto' style={{ borderRadius: '20px' }}>
                    <CardActionArea>
                        <CardMedia className='img-fluid'
                            component="img"
                            image={"https://i.ibb.co/KKfz3rj/admin.png"}
                            alt="Blog img"
                            sx={{ borderRadius: '20px', maxHeight: '400px' }}
                        />
                        <CardContent>
                            <form onSubmit={handleMakeAdmin} className="mt-2">
                                <TextField id="admin-input"
                                    className="w-100" type="email" required onChange={handleOnBlur} label="ENTER A EMAIL AND CREATE A ADMIN" variant="standard" />
                                <Button type="submit" variant="contained" className=" w-100  rounded-pill mt-4 ">
                                    CREATE NEW ADMIN
                                </Button>
                            </form>
                        </CardContent>
                    </CardActionArea>
                </Card>


            </div>
        </div>
    );
};

export default MakeAdmin;