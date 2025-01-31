"use client"
import Script from 'next/script';
import React from 'react';

const JavascriptClient = () => {
    return (
        <>
            <Script src="/js/bootstrap.bundle.min.js" strategy="beforeInteractive" />
        </>
    );
};

export default JavascriptClient;