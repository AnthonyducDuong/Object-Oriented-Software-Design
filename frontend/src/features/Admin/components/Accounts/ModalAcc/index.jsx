import React, { useEffect, useState } from 'react';
import PropTypes from 'prop-types';
import { yupResolver } from '@hookform/resolvers/yup';
import * as yup from 'yup'
import {
    Modal,
    ModalOverlay,
    ModalContent,
    ModalHeader,
    ModalBody,
    ModalCloseButton, Button, Input, Box, Image, Icon, Flex, Heading
} from '@chakra-ui/react'
import {
    FormControl,
    FormLabel,
    FormErrorMessage, InputGroup, InputLeftElement, InputRightElement, Select
} from '@chakra-ui/react'
import { HiMail } from 'react-icons/hi';
import { RiLockPasswordFill, RiUser3Fill } from 'react-icons/ri';
import { BiShowAlt, BiHide } from 'react-icons/bi';
import IMAGES from '../../../../../constants/images';
import { useForm } from 'react-hook-form';

ModalAcc.propTypes = {

};
const accountSchema = yup.object().shape({
    userName: yup
        .string()
        .required('⚠ Username invalid')
        .min(6, '⚠ Username must be at least 6 characters')
        .max(10, '⚠ Username must be at most 10 charaters'),
    email: yup
        .string()
        .required('⚠ Email invalid')
        .email('⚠ Email must be a valid email'),
    password: yup
        .string()
        .required('⚠ Password invalid')
        .min(6, '⚠ Password must be at least 6 characters')
        .max(17, '⚠ Password must be at most 17 characters')
        .matches(
            /^(?=.*[A-Za-z])(?=.*\d)(?=.*[@$!%*#?&])[A-Za-z\d@$!%*#?&]{8,}$/,
            "⚠ Must Contain 8 Characters, One Uppercase, One Lowercase, One Number and one special case Character"
        ),
    confirmPassword: yup.string()
        .required('⚠ Confirm password invalid')
        .oneOf([yup.ref('password'), null], '⚠ Passwords must match'),
    role: yup.string().required('⚠ Role invalid')
})

function ModalAcc(props) {
    const { openModal, closeModal, handleAction, isRender } = props
    const [showPassword, setShowPassword] = useState(false);
    const [showConfirmPassword, setShowConfirmPassword] = useState(false);
    const { register, handleSubmit, setValue, reset, formState: { errors } } = useForm({
        mode: 'all',
        resolver: yupResolver(accountSchema),
        defaultValues: {
            userName: '',
            email: '',
            password: '',
            confirmPassword: '',
            role: ''
        },
    });
    const _onSumbit = (data) => {
        handleAction(data)
    }
    useEffect(() => {
        setValue("userName", '')
        setValue("email", '')
        setValue("password", '')
        setValue("confirmPassword", '')
        setValue("role", '')
    }, [isRender])
    return (
        <>
            <Modal isOpen={openModal} onClose={closeModal} size='lg'>
                <ModalOverlay opacity='0.4 !important' />
                <ModalContent top='40px' >
                    {/* <ModalHeader textAlign='center'>{headerModal}</ModalHeader> */}
                    <ModalCloseButton />
                    <ModalBody >
                        <Flex alignItems='center' justifyContent='center' width='100%' height='auto'>

                            <Box width='sm' padding='20px' borderRadius='6px'>

                                <Box marginBottom='16px'>
                                    <Heading
                                        textAlign='center'
                                        fontSize='30px'
                                        fontWeight='500'
                                    >

                                        Create account
                                    </Heading>
                                    <Flex justifyContent='center'>
                                        <Image src={IMAGES.Logo} width='100px' />
                                    </Flex>
                                </Box>
                                <form onSubmit={handleSubmit(_onSumbit)}>
                                    <FormControl
                                        isRequired
                                        marginBottom={'4'}

                                        isInvalid={!!errors?.userName?.message}
                                        errortext={errors?.userName?.message}
                                    >
                                        <InputGroup>
                                            <InputLeftElement
                                                pointerEvents={'none'}
                                                children={<Icon as={RiUser3Fill} color={'gray.300'} />}
                                                height={'100%'}
                                                fontSize='xl'
                                            />
                                            <Input
                                                placeholder='User name'
                                                bg={'blackAlpha.200'}
                                                focusBorderColor='pink.300'
                                                lineHeight={'3'}
                                                h='50px'
                                                variant='filled'
                                                size='lg'
                                                boxShadow={'md'}
                                                fontSize='md'
                                                fontWeight={'semibold'}
                                                {...register('userName')}
                                            />
                                        </InputGroup>
                                        <FormErrorMessage>
                                            {errors?.userName?.message}
                                        </FormErrorMessage>
                                    </FormControl>
                                    <FormControl
                                        isRequired
                                        marginBottom={'4'}

                                        isInvalid={!!errors?.email?.message}
                                        errortext={errors?.email?.message}
                                    >
                                        <InputGroup>
                                            <InputLeftElement
                                                pointerEvents={'none'}
                                                children={<Icon as={HiMail} color={'gray.300'} />}
                                                height={'100%'}
                                                fontSize='xl'
                                            />
                                            <Input
                                                placeholder='email@gmail.com'
                                                bg={'blackAlpha.200'}
                                                focusBorderColor='pink.300'
                                                lineHeight={'3'}
                                                h='50px'
                                                variant='filled'
                                                size='lg'
                                                boxShadow={'md'}
                                                fontSize='md'
                                                fontWeight={'semibold'}
                                                {...register('email')}
                                            />
                                        </InputGroup>
                                        <FormErrorMessage>
                                            {errors?.email?.message}
                                        </FormErrorMessage>
                                    </FormControl>

                                    <FormControl
                                        isRequired
                                        marginBottom={'4'}

                                        isInvalid={!!errors?.password?.message}
                                        errortext={errors?.password?.message}
                                    >
                                        <InputGroup>
                                            <InputLeftElement
                                                pointerEvents={'none'}
                                                children={<Icon as={RiLockPasswordFill} color={'gray.300'} />}
                                                height={'100%'}
                                                fontSize='xl'
                                            />
                                            <Input
                                                type={showPassword ? 'text' : 'password'}
                                                placeholder={'Password'}
                                                bg={'blackAlpha.200'}
                                                focusBorderColor='pink.300'
                                                lineHeight={'3'}
                                                h='50px'
                                                variant='filled'
                                                size='lg'
                                                boxShadow={'md'}
                                                fontSize='md'
                                                fontWeight={'semibold'}
                                                {...register('password')}
                                            />
                                            <InputRightElement
                                                height={'100%'}
                                                width='2rem'
                                                marginRight={2}
                                            >
                                                <Button bg={'gray.200'} size='sm' onClick={() => { setShowPassword(!showPassword) }}>
                                                    {showPassword ? <Icon as={BiShowAlt} /> : <Icon as={BiHide} />}
                                                </Button>
                                            </InputRightElement>
                                        </InputGroup>
                                        <FormErrorMessage>
                                            {errors?.password?.message}
                                        </FormErrorMessage>
                                    </FormControl>
                                    <FormControl
                                        isRequired
                                        marginBottom={'4'}

                                        isInvalid={!!errors?.confirmPassword?.message}
                                        errortext={errors?.confirmPassword?.message}
                                    >
                                        <InputGroup>
                                            <InputLeftElement
                                                pointerEvents={'none'}
                                                children={<Icon as={RiLockPasswordFill} color={'gray.300'} />}
                                                height={'100%'}
                                                fontSize='xl'
                                            />
                                            <Input
                                                type={showConfirmPassword ? 'text' : 'password'}
                                                placeholder={'Confirmed Password'}
                                                bg={'blackAlpha.200'}
                                                focusBorderColor='pink.300'
                                                lineHeight={'3'}
                                                h='50px'
                                                variant='filled'
                                                size='lg'
                                                boxShadow={'md'}
                                                fontSize='md'
                                                fontWeight={'semibold'}
                                                {...register('confirmPassword')}
                                            />
                                            <InputRightElement
                                                height={'100%'}
                                                width='2rem'
                                                marginRight={2}
                                            >
                                                <Button bg={'gray.200'} size='sm' onClick={() => { setShowConfirmPassword(!showConfirmPassword) }}>
                                                    {showConfirmPassword ? <Icon as={BiShowAlt} /> : <Icon as={BiHide} />}
                                                </Button>
                                            </InputRightElement>
                                        </InputGroup>
                                        <FormErrorMessage>
                                            {errors?.confirmPassword?.message}
                                        </FormErrorMessage>
                                    </FormControl>

                                    <FormControl
                                        isRequired
                                        marginBottom={'4'}

                                        isInvalid={!!errors?.role?.message}
                                        errortext={errors?.role?.message}
                                    >
                                        <InputGroup>
                                            <Select placeholder='Select role'
                                                bg={'blackAlpha.200'}
                                                focusBorderColor='pink.300'
                                                lineHeight={'3'}
                                                h='50px'
                                                variant='filled'
                                                size='lg'
                                                boxShadow={'md'}
                                                fontSize='sm'
                                                fontWeight={'semibold'}
                                                {...register('role')}
                                            >
                                                <option value='ADMIN'>Admin</option>
                                                <option value='USER'>User</option>
                                            </Select>
                                        </InputGroup>
                                        <FormErrorMessage>
                                            {errors?.role?.message}
                                        </FormErrorMessage>
                                    </FormControl>

                                    <Button
                                        type='submit'

                                        colorScheme='pink'

                                        width={'100%'}
                                        h='50px'
                                        size={'lg'}

                                        marginTop='0'
                                        paddingY={'4'}
                                        paddingX={'0'}

                                        //bgGradient='linear(to-tr, pink.300, red.300)'
                                        bg={'#D61C62'}

                                        _hover={{
                                            bgGradient: 'linear(to-tr, #D61C62, pink.300)',
                                        }}
                                    >
                                        Create Account
                                    </Button>
                                </form>
                            </Box>
                        </Flex>
                    </ModalBody>
                </ModalContent>
            </Modal>
        </>
    );
}

export default ModalAcc;