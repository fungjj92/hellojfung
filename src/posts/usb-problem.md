---
title: If the USB fits, will it work?
date: 2023-05-08T10:10:10
author: Jenny Fung
tags:
  - Technology
  - Hardware
  - Communication
---

### The Problem

While I was traveling recently, I encountered an interesting technical problem. As someone who likes to travel light, I consolidated all of my cords and plugs into just a few types that could work with all of my devices. Specifically, I packed a USB C-C cord and a USB-C adapter plug, thinking that they would be versatile enough to work with all of my smaller devices, even though C-C was not necessarily the usual cord I used for all of them.

During my layover, I tried to charge both my phone and my watch using my charging dock, which had a C port. I used my C adapter plug with the C-C cord, thinking that it would work perfectly. But to my surprise, I couldn't get any juice! I wondered if it was just the janky, wobbly airport outlet, but fortunately, a kind passenger lent me an A-C cord, which worked perfectly when plugged into an A outlet. Phew! I was able to charge my devices briefly before boarding the plane.

But when I tried to use that same A-C cord on several seatback A ports on the plane, it didn't work at all. I was puzzled, but I just brushed it off as the outlets being fickle. After all, I was trapped on a plane, and there wasn't much I could do about it.

Up until now, I've always thought of USBs like a kid's block toy. If it fits, it should work, right? But the evidence was showing me that maybe it's not so simple.

I had the impulse to throw the problem away and start fresh – I searched online to buy a new dock. However, I was sure the dock itself was not broken since it worked well at the airport. This was likely a solvable technical problem. I removed the item from my cart.

### Isolating the problem 

First, I needed to verify that the C adapter and C-C cord I used were not broken. I tested them on my laptop, which charged successfully, although slowly. So, I could confirm that the cord and adapter were functional.

Next, I needed to determine whether the various devices were compatible. I dug deep into my Amazon order history to find the details for the dock. I checked the device documentation and specs and discovered that the dock came with an A-C cord and a 15W USB-A adapter. I had used these without issue at home until the day before.



I then double-checked the adapter output and saw that it was ~15W. A quick calculation using high school math (Volts x Amps = Watts) confirmed this.

So each component was functional, just not together for some reason.

### A Brief Deep Dive into USBs

The Universal Serial Bus (USB) was created collaboratively by major computer companies to standardize connecting peripheral devices to a computer. [Before USB][usb-history], there were too many options of connectors that peripheral devices could use, and some required manual configuration on the computer. This was especially cumbersome for end-users like you and me.

Nowadays (in 2023), there are many types of USBs available. The most popular ones are A and C. Additionally, there are B and micro versions of A, B for the smallest single-board computers like Raspberry Pis and Arduinos. The standards governing body for USBs, the [USB-IF][usb-if], upgrades the USB build specification over time. As of 2019, the version is 4.0. 

Newer versions are speedier (in terms of data transfer and charging) by using more modern hardware and/or adding pins, but all versions remain usable. I should note to myself to consider replacing my USB cords with those supplied with newly purchased devices.

While the USB's wide adoption by device manufacturers changed the game for consumers to "plug and play", it turns out that not all USBs are made equal. While USBs have a specification, manufacturers can interpret it differently. Additionally, there is no product compliance body that quality checks if USBs are made equally. This can lead to behavioral inconsistency and the ability to cut corners in the hardware.

USB-C is on track to become the standard USB type. In 2022, the [E.U famously passed a law][usbc-law] mandating companies (such as Apple) to switch to USB-C on technically-compatible devices starting in 2024.

Power can flow either way between devices connected via USB-C, with the important caveat that the devices themselves must decide which will act as either the power source or sink. This is a crucial communication step that is largely automatic via the USB hardware and relative level of device charge (if both devices have batteries). On [some devices][choose-usb-adventure], the direction of power flow can be chosen by the user. For USB-A, power flow is automatic and unidirectional from the A male plug as part of the spec.

In the case of my charging dock, I noticed that no power was drawn when using the C-C cord and C adapter. Charging was successful using an A-C cord. My dock was cheaply manufactured in China for assumed use with an A-C cord, so I suspect that it lacks the hardware that declares itself the power sink. An electronics hobbyist on Reddit reported solving this with a simple solder job: soldering 5.1k resistor pulldowns onto both pins labelled "CC" on the C female port of his sink device (in my case, the charging dock). This fix was corroborated by descriptions of USB-C [boards for sale][boards-for-sale].

### Resolution

I went to the store and walked away with an A-C cord and an A-C female to male adapter.
This way, I could still use my C adapter plug. Now my devices are charging perfectly, so I'm happy with my solution.

The only mystery left unsolved is why my devices didn't charge on the plane. I think it might have been due to low voltage, but I don't have enough data to support this hypothesis.  

I find communication fascinating in all its forms: between people, between the brain and body, among animals, and, in this case, among technology. I’m glad to have gained this new understanding of an otherwise invisible part of our daily lives.

[usb-history]: https://www.eetimes.com/do-you-remember-the-world-before-usb/
[usb-if]: https://www.usb.org/
[usbc-law]: https://www.macrumors.com/2022/10/24/eu-gives-final-approval-to-usb-c-law/
[choose-usb-adventure]: https://qr.ae/pyG0ZH
[boards-for-sale]: https://www.aliexpress.com/item/1005004848158786.html
