variable "access_key" {}
variable "secret_key" {}

provider "aws" {
    access_key = "${var.access_key}"
    secret_key = "${var.secret_key}"
    region = "eu-west-1"
}

resource "aws_instance" "zik42day" {
    ami = "ami-971a65e0"
    instance_type = "t1.micro"
}

resource "aws_eip" "ip" {
    instance = "${aws_instance.zik42day.id}"
}

output "ip" {
    value = "${aws_eip.ip.public_ip}"
}
